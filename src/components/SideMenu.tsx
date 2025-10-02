interface MenuItem {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface SideMenuProps {
  items: MenuItem[];
  className?: string;
}

export default function SideMenu({ items, className = "" }: SideMenuProps) {
  return (
    <div className={`text-white/60 space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={
            item.active
              ? "text-white font-semibold"
              : "hover:text-white cursor-pointer"
          }
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
