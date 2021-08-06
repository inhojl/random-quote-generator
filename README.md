# Quote Bot

## Get Started
- npm install
- cd client
- npm install
- cd ..
- npm run dev

## Component Hierarchy

- App
  - Title (h1)
  - RobotItem
    - RobotAvatar
    - RobotLocation
    - description (p)
  - QuoteItem
    - Heading (h2)
    - Quote (p)
    - Author (p)
    - Audio
    - RadioGroup
      - Button
      - Button
      - Button
  - PreviousQuotes
    - Button ('previous quotes button')
    - description (p)
    - QuoteIndex


## Redux state
{
  quote: 
    quotes: {
    123: {
      id: 123,
      quote: 'you shall not pass',
      rating: ('lame', 'meh', 'great),
      index: 0
    },
    : {
      id: 453,
      quote: 'you shall not pass',
      rating: ('lame', 'meh', 'great),
      index: 1
    }
  },
  current: {
    
  }
}