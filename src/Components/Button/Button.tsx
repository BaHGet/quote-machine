import './button.css';

export const Button = ({ children, onClick, id }: { children: React.ReactNode; onClick: () => void , id?: string}) => {
    return (
        <button id={id} onClick={onClick} className="button">
            {children}
        </button>
    )
}