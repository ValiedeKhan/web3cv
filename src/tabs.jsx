
import { useState } from 'react';

export function Tabs({ defaultValue, children, className }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={className}>
      {children.map(child =>
        child.type.name === 'TabsList'
          ? React.cloneElement(child, { value, onChange: setValue })
          : child.type.name === 'TabsContent' && child.props.value === value
          ? child
          : null
      )}
    </div>
  );
}

export function TabsList({ children, value, onChange, className }) {
  return (
    <div className={\`flex gap-2 \${className}\`}>
      {children.map(child =>
        child.type.name === 'TabsTrigger'
          ? React.cloneElement(child, {
              isActive: value === child.props.value,
              onClick: () => onChange(child.props.value),
            })
          : child
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-md \${isActive ? 'bg-purple-600 text-white' : 'bg-purple-800 text-purple-200'}\`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
