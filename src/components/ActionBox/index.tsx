import styles from './styles.less';
import { Row, Col, Card, Typography, Avatar } from 'antd';
import { Avatars } from '../../mock-data/avatar';
import { Button } from '../Button';

const { Title } = Typography;

type ActionBoxProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonType: 'primary' | 'ghost' | 'dashed' | 'default';
};

// When the component receive many props, it's a good practice to not destructure it

export default function ActionBox(actionBox: ActionBoxProps) {
  return (
    <Card className={styles.chatbox}>
      <Title level={3} className={styles.title}>
        {actionBox.title}
      </Title>

      <p className={styles.subtitle}>{actionBox.subtitle}</p>

      <p>{actionBox.description}</p>

      <Row justify="space-between" align="bottom">
        <Col xs={24} md={18}>
          <div>Chat with:</div>
          <Avatar.Group size="large">
            {Avatars.map((avatar: string) => (
              <Avatar src={avatar} />
            ))}
          </Avatar.Group>
        </Col>
        <Col xs={24} md={6} style={{ marginTop: '1rem' }}>
          <Button size="large" type={actionBox.buttonType}>
            {actionBox.buttonText}
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
