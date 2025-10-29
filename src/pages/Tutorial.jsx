import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { tutorials } from '../data/Tutorials';

function Tutorial() {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iconUrl, setIconUrl] = useState('');
  const [glowColor, setGlowColor] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Dynamically import the markdown file
        const tutorial = await import(`../tutorials/${filename}.md`);
        const tutorialMetadata = tutorials.find(tutorial => tutorial.filename == filename);
        setIconUrl(tutorialMetadata.iconUrl);
        setGlowColor(tutorialMetadata.backlitColor);
        setMarkdown(tutorial.default);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError('Tutorial not found');
      } finally {
        setLoading(false);
      }
    };

    if (filename) {
      loadMarkdown();
    }
  }, [filename]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4">{error}</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-full md:max-w-4xl mx-auto px-4 pt-4 pb-8">
      {/* Glowing blobs */}
      <div className="glow w-10/12 h-80 -top-20 left-1/2 -translate-x-1/2" style={{ ["--glowing-blob-color"]: glowColor }}></div>

      {/* Page icon */}
      <div className="relative h-24 overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-48 h-48 rounded-2xl
                            flex items-center justify-center
                            transition-all duration-300
                            hover:scale-110 hover:rotate-45">
              {iconUrl ? (
                <img 
                  src={iconUrl} 
                  alt="Tutorial Icon"
                  className="w-20 h-20 object-contain"
                />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-80" />
              )}
              
            </div>
          </div>
        </div>

      {/* Page content */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom code block styling with syntax highlighting
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={{ ...gruvboxDark, "margin-left": "1rem" }}
                language={match[1]}
                PreTag="div"
                className="rounded-lg"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code 
                className="bg-gray-50 text-red-600 px-1 py-0.5 rounded text-sm font-mono" 
                {...props}
              >
                {children}
              </code>
            );
          },
          // Style headings
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-8 mb-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-5" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-6 mb-4" {...props} />
          ),
          // Style paragraphs
          p: ({ node, ...props }) => (
            <p className="mb-4 pl-4 opacity-50 leading-relaxed" {...props} />
          ),
          // Style lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
          ),
          // Style links
          a: ({ node, ...props }) => (
            <a 
              className="text-blue-600 hover:text-blue-800 underline" 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props} 
            />
          ),
          // Style blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" 
              {...props} 
            />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default Tutorial;