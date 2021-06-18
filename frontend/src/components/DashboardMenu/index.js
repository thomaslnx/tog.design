import { BsGraphUp } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa';

import { Container, Header, Content, Wrap } from './styles';

const DashboardMenu = () => {
  return (
    <Container>
      <Header>
        <div className="dashboard-button">
          <button type="button" className="graph">
            <BsGraphUp />
          </button>
          <span>Dashboard</span>
        </div>
        <div className="purchases-container">
          <button type="button" className="purchased-articles">
            <BiBook />
          </button>
          <button type="button" className="article-wrote">
            <FaRegEdit />
          </button>
        </div>
      </Header>
      <Content>
        <Wrap>
          <div>
            <span className="title">Published articles</span>
            <div className="statistics">
              <span>15</span>
              <div className="bar">--------------------</div>
            </div>
          </div>
          <div>
            <span className="title">Sales of articles</span>
            <div className="statistics">
              <span>300</span>
              <div className="bar">--------------------</div>
            </div>
          </div>
          <div>
            <span className="title">Read articles</span>
            <div className="statistics">
              <span>10</span>
              <div className="bar">--------------------</div>
            </div>
          </div>
          <div>
            <span className="title">Purchased articles</span>
            <div className="statistics">
              <span>8</span>
              <div className="bar">--------------------</div>
            </div>
          </div>
          <div>
            <span className="title">Creations received</span>
            <div className="statistics">
              <span>15</span>
              <div className="bar">--------------------</div>
            </div>
          </div>
        </Wrap>
      </Content>
    </Container>
  );
};

export default DashboardMenu;
