/** @jsx jsx */
import { useThemeUI, ThemeProvider, Styled, jsx, SxStyleProp } from 'theme-ui';
import { base } from '@theme-ui/presets';
import chroma from 'chroma-js';
import copy from 'clipboard-copy';

const colorNameStyle = {
  fontSize: 0,
  fontFamily: 'monospace',
  opacity: 0.7,
  transition: 'all 0.1s linear',
  cursor: 'pointer',
};

function ColorSwatch({ color, name }) {
  const hex = chroma(color).hex();
  const rgb = chroma(color)
    .css()
    .split(',')
    .join(', ');
  const hsl = chroma(color)
    .css('hsl')
    .split(',')
    .join(', ');
  return (
    <div
      sx={{
        mb: 4,
        mr: 4,
        boxShadow: '0px 0px 30px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        width: ['90%', '40%'],
        bg: 'background',
      }}
    >
      <div
        sx={{
          bg: color,
          width: 100,
          height: 100,
        }}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 3,
        }}
      >
        <div sx={{ fontWeight: 'bold' }}>{name}</div>
        <div
          onClick={() => copy(hex)}
          sx={{
            ...colorNameStyle,
            ':hover': {
              opacity: 1,
              color: color,
            },
          }}
        >
          {hex}
        </div>
        <div
          onClick={() => copy(rgb)}
          sx={{
            ...colorNameStyle,
            ':hover': {
              opacity: 1,
              color: color,
            },
          }}
        >
          {rgb}
        </div>
        <div
          onClick={() => copy(hsl)}
          sx={{
            ...colorNameStyle,
            ':hover': {
              opacity: 1,
              color: color,
            },
          }}
        >
          {hsl}
        </div>
      </div>
    </div>
  );
}

function ColorExample({ colors }) {
  return (
    <div
      sx={
        {
          backgroundColor: colors.background,
          boxShadow: '0px 0px 30px rgba(0,0,0,0.1)',
          width: ({ space }) => `calc(80% + ${space[4]}px)`,
          borderRadius: 8,
          overflow: 'hidden',
          mb: 4,
        } as SxStyleProp
      }
    >
      <header
        sx={{
          backgroundColor: colors.primary,
          height: 80,
        }}
      />
      <h1 sx={{ color: colors.text, px: 4, py: 2 }}>Welcome to Clown Town</h1>
      <main sx={{ color: colors.text, px: 4, pb: 4 }}>
        A <span sx={{ bg: colors.highlight }}>nice place</span> where no scary
        things happen. We even have{' '}
        <a href="#" sx={{ color: colors.secondary }}>
          a town dog.
        </a>
      </main>
      <footer
        sx={{
          backgroundColor: colors.muted,
          px: 4,
          py: 3,
          textAlign: 'right',
        }}
      >
        Clown Town Industries, 2001
      </footer>
    </div>
  );
}

function ColorList({ colors }) {
  return (
    <div
      sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', py: 2 }}
    >
      {Object.keys(colors).map(color => (
        <ColorSwatch color={colors[color]} name={color} />
      ))}
    </div>
  );
}

function ColorContrastList({ colors }) {
  return (
    <div sx={{ mb: 4 }}>
      <div sx={{ bg: colors.background, color: colors.text }}>
        Contrast for <code>text</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.text)}
        {chroma.contrast(colors.background, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.muted, color: colors.text }}>
        Contrast for <code>text</code> on <code>muted</code> is:{' '}
        {chroma.contrast(colors.muted, colors.text)}
        {chroma.contrast(colors.muted, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.background, color: colors.primary }}>
        Contrast for <code>primary</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.primary)}
        {chroma.contrast(colors.background, colors.primary) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.background, color: colors.secondary }}>
        Contrast for <code>secondary</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.secondary)}
        {chroma.contrast(colors.background, colors.secondary) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.primary, color: colors.text }}>
        Contrast for <code>text</code> on <code>primary</code> is:{' '}
        {chroma.contrast(colors.primary, colors.text)}
        {chroma.contrast(colors.primary, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.secondary, color: colors.text }}>
        Contrast for <code>text</code> on <code>secondary</code> is:{' '}
        {chroma.contrast(colors.secondary, colors.text)}
        {chroma.contrast(colors.secondary, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.primary, color: colors.muted }}>
        Contrast for <code>muted</code> on <code>primary</code> is:{' '}
        {chroma.contrast(colors.primary, colors.muted)}
        {chroma.contrast(colors.primary, colors.muted) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.secondary, color: colors.muted }}>
        Contrast for <code>muted</code> on <code>secondary</code> is:{' '}
        {chroma.contrast(colors.secondary, colors.muted)}
        {chroma.contrast(colors.secondary, colors.muted) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
    </div>
  );
}

function Colors({ colors }) {
  return (
    <Styled.root>
      <Styled.h2>Colors</Styled.h2>
      <ColorExample colors={colors} />
      <ColorList colors={colors} />
      <ColorContrastList colors={colors} />
    </Styled.root>
  );
}

function Theme({ theme: propTheme }) {
  const { theme: contextTheme } = useThemeUI();
  const theme = propTheme || contextTheme || base;
  return (
    <ThemeProvider theme={theme}>
      <Colors colors={theme.colors} />
    </ThemeProvider>
  );
}

export { Theme };