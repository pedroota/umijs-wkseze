import { ReactNode } from 'react';
import styles from './styles.less';
import { Row, Col } from 'antd';

type ChatBoxProps = {
  children: ReactNode;
};

export default function ChatBox({ children }: ChatBoxProps) {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>{children}</Col>
    </Row>
  );
}
