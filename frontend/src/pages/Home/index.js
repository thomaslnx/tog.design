import { Container, Content, Posts, Menu, Card } from './styles';
import Header from '../../components/Header';

import trend from '../../assets/trends/trend.png';
import avatar from '../../assets/avatar/avatar.png';

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Posts>
          <Card>
            <div className="header">
              <img src={trend} alt="trend-log" />
              <p>What was the trend in 2020 and you didn&apos;t use it</p>
            </div>
            <footer>
              <div className="user">
                <img src={avatar} alt="avatar" />
                <div className="user-data">
                  <p className="name"> Daniel Alves</p>
                  <p className="role"> Product Design</p>
                </div>
                <button className="follow-btn" type="button">
                  FOLLOW
                </button>
              </div>
              <div className="posts-info">
                <div className="theme">
                  <p className="title">themes</p>
                  <p className="description">
                    UX Design, Business, Sales
                    <br /> User Research
                  </p>
                </div>
                <div className="temps">
                  <p className="title">temps</p>
                  <p className="description">4 minutes</p>
                </div>
              </div>
            </footer>
          </Card>
          <Card>
            <div className="header">
              <img src={trend} alt="trend-log" />
              <p>What was the trend in 2020 and you didn&apos;t use it</p>
            </div>
            <footer>
              <div className="user">
                <img src={avatar} alt="avatar" />
                <div className="user-data">
                  <p className="name"> Daniel Alves</p>
                  <p className="role"> Product Design</p>
                </div>
                <button className="follow-btn" type="button">
                  FOLLOW
                </button>
              </div>
              <div className="posts-info">
                <div className="theme">
                  <p className="title">themes</p>
                  <p className="description">
                    UX Design, Business, Sales
                    <br /> User Research
                  </p>
                </div>
                <div className="temps">
                  <p className="title">temps</p>
                  <p className="description">4 minutes</p>
                </div>
              </div>
            </footer>
          </Card>
          <Card>
            <div className="header">
              <img src={trend} alt="trend-log" />
              <p>What was the trend in 2020 and you didn&apos;t use it</p>
            </div>
            <footer>
              <div className="user">
                <img src={avatar} alt="avatar" />
                <div className="user-data">
                  <p className="name"> Daniel Alves</p>
                  <p className="role"> Product Design</p>
                </div>
                <button className="follow-btn" type="button">
                  FOLLOW
                </button>
              </div>
              <div className="posts-info">
                <div className="theme">
                  <p className="title">themes</p>
                  <p className="description">
                    UX Design, Business, Sales
                    <br /> User Research
                  </p>
                </div>
                <div className="temps">
                  <p className="title">temps</p>
                  <p className="description">4 minutes</p>
                </div>
              </div>
            </footer>
          </Card>
          <Card>
            <div className="header">
              <img src={trend} alt="trend-log" />
              <p>What was the trend in 2020 and you didn&apos;t use it</p>
            </div>
            <footer>
              <div className="user">
                <img src={avatar} alt="avatar" />
                <div className="user-data">
                  <p className="name"> Daniel Alves</p>
                  <p className="role"> Product Design</p>
                </div>
                <button className="follow-btn" type="button">
                  FOLLOW
                </button>
              </div>
              <div className="posts-info">
                <div className="theme">
                  <p className="title">themes</p>
                  <p className="description">
                    UX Design, Business, Sales
                    <br /> User Research
                  </p>
                </div>
                <div className="temps">
                  <p className="title">temps</p>
                  <p className="description">4 minutes</p>
                </div>
              </div>
            </footer>
          </Card>
        </Posts>
        <Menu />
      </Content>
    </Container>
  );
};

export default Home;
