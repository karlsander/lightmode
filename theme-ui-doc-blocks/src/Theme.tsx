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
        <div
          onClick={() => copy(name)}
          sx={{
            fontWeight: 'bold',
            cursor: 'pointer',
            ':hover': {
              opacity: 1,
              color: color,
            },
          }}
        >
          {name}
        </div>
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
        <ColorSwatch key={color} color={colors[color]} name={color} />
      ))}
    </div>
  );
}

function ColorContrastList({ colors }) {
  return (
    <div sx={{ mb: 4 }}>
      <div sx={{ bg: colors.background, color: colors.text, px: 3, py: 1 }}>
        Contrast for <code>text</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.text)}
        {chroma.contrast(colors.background, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.muted, color: colors.text, px: 3, py: 1 }}>
        Contrast for <code>text</code> on <code>muted</code> is:{' '}
        {chroma.contrast(colors.muted, colors.text)}
        {chroma.contrast(colors.muted, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.background, color: colors.primary, px: 3, py: 1 }}>
        Contrast for <code>primary</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.primary)}
        {chroma.contrast(colors.background, colors.primary) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div
        sx={{ bg: colors.background, color: colors.secondary, px: 3, py: 1 }}
      >
        Contrast for <code>secondary</code> on <code>background</code> is:{' '}
        {chroma.contrast(colors.background, colors.secondary)}
        {chroma.contrast(colors.background, colors.secondary) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.primary, color: colors.text, px: 3, py: 1 }}>
        Contrast for <code>text</code> on <code>primary</code> is:{' '}
        {chroma.contrast(colors.primary, colors.text)}
        {chroma.contrast(colors.primary, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.secondary, color: colors.text, px: 3, py: 1 }}>
        Contrast for <code>text</code> on <code>secondary</code> is:{' '}
        {chroma.contrast(colors.secondary, colors.text)}
        {chroma.contrast(colors.secondary, colors.text) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.primary, color: colors.muted, px: 3, py: 1 }}>
        Contrast for <code>muted</code> on <code>primary</code> is:{' '}
        {chroma.contrast(colors.primary, colors.muted)}
        {chroma.contrast(colors.primary, colors.muted) >= 4.5
          ? ' (enough)'
          : ' (not enough)'}
      </div>
      <div sx={{ bg: colors.secondary, color: colors.muted, px: 3, py: 1 }}>
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

function SpaceScale({ steps }) {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', my: 3 }}>
      {steps.map((step, index) => (
        <div
          key={step}
          sx={{
            width: `${step}px`,
            textAlign: 'center',
            color: 'white',
            textShadow: '0px 0px 8px black',
            bg: 'primary',
          }}
        >
          [{index}]:&nbsp;{step}
        </div>
      ))}
    </div>
  );
}

function SpaceBoxes({ steps }) {
  const temp = [...steps];
  return (
    <div
      sx={{
        width: steps[steps.length - 1],
        height: steps[steps.length - 1],
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        display: 'flex',
        bg: 'primary',
        my: 3,
      }}
    >
      {temp.reverse().map(step => (
        <div
          key={step}
          sx={{
            bg: '#ffffff44',
            border: `1px solid black`,
            pr: `${step}px`,
            pb: `${step}px`,
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
}

function Space({ space }) {
  return (
    <Styled.root>
      <Styled.h2>Space</Styled.h2>
      <SpaceScale steps={space} />
      <SpaceBoxes steps={space} />
    </Styled.root>
  );
}

function FontSizes({ sizes }) {
  return (
    <div sx={{ display: 'flex', alignItems: 'center' }}>
      {sizes.map((size, index) => (
        <span sx={{ fontSize: size }}>
          [{index}] {size}
        </span>
      ))}
    </div>
  );
}

function FontFamilies({ fonts }) {
  return (
    <div>
      {Object.keys(fonts).map(label => (
        <div key={label} sx={{ fontFamily: fonts[label] }}>
          {label}: {fonts[label]}
        </div>
      ))}
    </div>
  );
}

function Typography({
  theme: { fonts, fontSizes, textStyles, fontWeights, lineHeights },
}) {
  return (
    <Styled.root>
      <Styled.h2>Typography</Styled.h2>
      <Styled.h3>Font Families</Styled.h3>
      <FontFamilies fonts={fonts} />
      <Styled.h3>Font Sizes</Styled.h3>
      <FontSizes sizes={fontSizes} />
    </Styled.root>
  );
}

function Theme({ theme: propTheme }) {
  const { theme: contextTheme } = useThemeUI();
  const theme = propTheme || contextTheme || base;
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ bg: 'background' }}>
        <Colors colors={theme.colors} />
        {theme.space && <Space space={theme.space} />}
        <Typography theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export { Theme };
