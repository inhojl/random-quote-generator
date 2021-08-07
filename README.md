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
```
{

  quotes: {
    123: {
      id: 123,
      quote: 'you shall not pass',
      rating: ('lame', 'meh', 'great),
      index: 0
    },
    453: {
      id: 453,
      quote: 'I'm batman',
      rating: ('lame', 'meh', 'great),
      index: 1
    }
  },
  user: {
    ipAddress: '192.168.0.1',
    lon: '-132.194',
    lat: '33.53
  },
  ui: {
    current: {
      453: {
        id: 453,
        quote: 'you shall not pass',
        rating: ('lame', 'meh', 'great),
        index: 1
      }
    }
  }
}
```