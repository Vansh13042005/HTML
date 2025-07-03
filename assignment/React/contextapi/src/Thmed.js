// src/components/ThemedBox.js
import { useTheme } from './ThemeProvider';

function Thmed() {
  const { colors } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.text,
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      This box changes with the theme!
    </div>
  );
}

export default Thmed;