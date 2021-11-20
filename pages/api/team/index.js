import { firestore } from 'firebase/admin'

const Team = (req, res) => {
  return firestore
    .collection('teamMembers')
    .get()
    .then(doc => {
      const data = (doc.docs.map(item => {
        return {
          id: item.id,
          ...item.data()
        }
      }))

      res.status(200).json(data)
    })
}

export default Team

const TEAM_MEMBERS = [
  {
    name: 'Christopher Glood',
    discord: 'Consecutes#5009',
    avatar: 'https://avatars.githubusercontent.com/u/36427177?v=4',
    socialMedia: [
      {
        name: 'Github',
        url: 'https://github.com/consecutes'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/consecutes'
      }
    ],
    technologies: []
  },
  {
    name: 'Douglas Lovera',
    discord: 'DouLo#0763',
    avatar: 'https://avatars.githubusercontent.com/u/42481580?v=4',
    socialMedia: [
      {
        name: 'Link',
        url: 'https://doulovera.vercel.app/'
      },
      {
        name: 'Github',
        url: 'https://github.com/doulovera'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/doulovera'
      }
    ],
    technologies: [
      'Javascript',
      'Typescript',
      'React.js',
      'Next.js',
      'Node.js'
    ]
  }
]

// export default function team (req, res) {
//   res.status(200).json(TEAM_MEMBERS)
// }
