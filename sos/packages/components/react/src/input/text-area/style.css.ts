import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

export const inputStyle = style({
  width: '100%',
  selectors: {
    '&::placeholder': {
      color: vars.color.$palette.gray[200],
    },
  },
});
