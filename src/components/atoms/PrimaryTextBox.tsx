import { TextField } from '@mui/material';
import {memo, VFC} from 'react'

//Propsの型定義
type PropsType = {
  id: string;
  label: string;
  fieldName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const PrimaryTextBox: VFC<PropsType> = memo(({id,label,fieldName,onChange}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={fieldName}
      autoFocus
      onChange={onChange}
    />
  ); 
})
