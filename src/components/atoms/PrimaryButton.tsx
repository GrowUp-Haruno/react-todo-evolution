import { Button, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC, memo } from 'react';

//Propsの型定義
type PropsType = {
  sx?: SxProps<Theme>;
  disabled: boolean;
  children: string;
};

export const PrimaryButton: FC<PropsType> = memo(({ sx, disabled, children }) => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={sx} disabled={disabled}>
      {children}
    </Button>
  );
});
