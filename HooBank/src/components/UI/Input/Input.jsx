import './input.css'
export function Input ({inputPlaceholder,inputValue,inputOnChange}) {
return (
<input className="input" type="text"
    placeholder={inputPlaceholder}
    value={inputValue} onChange={e => inputOnChange(e.target.value)}/>
)
}