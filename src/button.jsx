
export function Button({ children, className, ...props }) {
  return (
    <button
      className={\`bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}
