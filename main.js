const FIELDSTYLES = [
    'self-center',
    'bg-gray-200',
    'shadow',
    'appearance-none',
    'border',
    'rounded',
    'w-full',
    'py-2',
    'px-3', 
    'my-3',
    'text-gray-700',
    'leading-tight',
    'focus:outline-none',
    'focus:shadow-outline'
]

const inputFields = document.querySelectorAll('.input-field')

for (const inputField of inputFields) {
    inputField.classList.add(...FIELDSTYLES)
}