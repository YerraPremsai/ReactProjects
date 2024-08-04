export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {/* her we used later onSelect = {onClick} now we use just {...props}  therefore in TabButton function in place of {...props} we used onSelect*/}
        {children}
      </button>
    </li>
  );
}
