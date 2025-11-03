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
      <div className="relative h-24">
          
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
          // Code blocks with syntax highlighting
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={{ ...gruvboxDark, marginLeft: "1rem" }}
                language={match[1]}
                PreTag="div"
                className="rounded-lg"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="text-white px-1 py-0.5 rounded text-sm font-mono"
                style={{ "background-color": glowColor }}
                {...props}
              >
                {children}
              </code>
            );
          },

          // Headings
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-8 mb-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-5" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-6 mb-4" {...props} />
          ),

          // Paragraphs
          p: ({ node, ...props }) => (
            <p className="mb-4 pl-4 opacity-80 leading-relaxed" {...props} />
          ),

          // Unordered and ordered lists (use padding for indentation; markers outside)
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-outside mb-4 pl-10 space-y-2 opacity-80"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-outside mb-4 pl-10 space-y-2 opacity-80"
              {...props}
            />
          ),

          // Optional: style list items (helps vertical rhythm)
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,

          // Optional: style GFM task-list checkboxes
          input: ({ node, ...props }) => (
            <input className="mr-2 accent-blue-600" {...props} />
          ),

          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),

          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600"
              {...props}
            />
          ),

          // Tables (from GFM) with rounded corners
          table: ({ node, ...props }) => (
            <div className="my-6 overflow-x-auto">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full text-sm" {...props} />
              </div>
            </div>
          ),
          thead: ({ node, ...props }) => <thead style={{ "background-color": glowColor }} {...props} />,
          tbody: ({ node, ...props }) => <tbody {...props} />,
          tr: ({ node, ...props }) => (
            <tr className="border-b last:border-0" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th
              className="text-left font-semibold px-3 py-2 border border-gray-200"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td className="px-3 py-2 align-top border border-gray-200" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default Tutorial;