import { Card } from './styles';
import avatar from '../../assets/avatar/avatar.png';
import trend from '../../assets/trends/trend.png';
import design from '../../assets/design/design.png';
import thinking from '../../assets/thinking/thinking.png';
import cycle from '../../assets/cycle/cycle.png';

const cardInfo = [
  {
    id: 1,
    avatar,
    postImage: trend,
    name: 'Daniel Alves',
    role: 'Product Design',
    postDescription: 'What was the trend in 2020 and you didn’t use it',
    description: 'UX Desing, Business, Sales User Research',
    readingTime: '4 minutes',
  },
  {
    id: 2,
    avatar,
    postImage: design,
    name: 'Daniel Alves',
    role: 'Product Design',
    postDescription: 'How to implement design thinking process',
    description: 'UX Desing, Business, Sales User Research',
    readingTime: '4 minutes',
  },
  {
    id: 3,
    avatar,
    postImage: thinking,
    name: 'Daniel Alves',
    role: 'Product Design',
    postDescription: 'How to implement design thinking process part 2',
    description: 'UX Desing, Business, Sales User Research',
    readingTime: '4 minutes',
  },
  {
    id: 4,
    avatar,
    postImage: cycle,
    name: 'Daniel Alves',
    role: 'Product Design',
    postDescription: 'Where can you apply design in your life?',
    description: 'UX Desing, Business, Sales User Research',
    readingTime: '4 minutes',
  },
];

const Cards = () => {
  const cardsComponent = cardInfo.map((item) => (
    <Card key={item.id}>
      <div className="header">
        <img src={item.postImage} alt="trend-log" />
        <p>{item.postDescription}</p>
      </div>
      <footer>
        <div className="user">
          <img src={item.avatar} alt="avatar" />
          <div className="user-data">
            <p className="name">{item.name}</p>
            <p className="role">{item.role}</p>
          </div>
          <button className="follow-btn" type="button">
            FOLLOW
          </button>
        </div>
        <div className="posts-info">
          <div className="theme">
            <p className="title">themes</p>
            <p className="description">{item.description}</p>
          </div>
          <div className="temps">
            <p className="title">temps</p>
            <p className="description">{item.readingTime}</p>
          </div>
        </div>
      </footer>
    </Card>
  ));

  return cardsComponent;
};

export default Cards;
