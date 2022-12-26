module.exports = {
  mode: 'jit',
  content: [
      './src/**/*.{html,js}',
      './**/*.html',
  ],
  important: true,
  theme: {
    colors:{
      'marine': '#0C2750',
      'blue': '#376BB6',
      'beige': '#EBC89D',
      'skin': '#E7BC87',
      'yellow':'#F0B024',
      'orange': '#E99C6C',
      'light-red': '#E75540',
      'red':'#E03E33',
      'white':'#F1EEED',
      'black':'#151514',
    },
    fontFamily:{
      'saotorpes':['"Sao Torpes"'],
      'secularone':['"Secular One"',],
      'quicksand':['Quicksand',],
    },
    screens: {
      'mobil': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1920px',
    },
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({}),
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}
