import { useState } from 'react';

type AddCategoryProps = {
  onNewCategory: (value: string) => void;
}




export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue( value );
  }
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addCategory();
    
  }

  const onClick = () => {
    addCategory();
  }

  const addCategory = () => {
    const newInputValue = inputValue.trim();
      
      if(newInputValue.length <= 1) return;
  
      onNewCategory(newInputValue);
      setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={ onInputChange }
      />
      <button onClick={onClick}>Buscar</button>
    </form>
  )

}
