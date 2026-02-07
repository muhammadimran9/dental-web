import { ChevronDownIcon } from './ui/Icons'

export default function DropdownMenu({ title, items }) {
  return (
    <div className="relative dropdown group pb-2">
      <DropdownTrigger title={title} />
      <DropdownContent items={items} />
    </div>
  )
}

function DropdownTrigger({ title }) {
  return (
    <div className="flex items-center gap-1">
      <a className="text-[15px] font-medium pb-1 border-b-2 border-transparent hover:border-blue-400" href="#">
        {title}
      </a>
      <ChevronDownIcon className="h-4 w-4 text-gray-600 transition-transform" />
    </div>
  )
}

function DropdownContent({ items }) {
  return (
    <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
      {items.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </div>
  )
}

function DropdownItem({ item }) {
  return (
    <a 
      className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-600 hover:text-white ${
        item.border ? 'border-b border-gray-200' : ''
      }`}
      href={item.href}
    >
      {item.label}
    </a>
  )
}
