import 'antd/dist/antd.css';
import ChatBox from '../components/Chatbox';
import ActionBox from '../components/ActionBox';

export default function IndexPage() {
  return (
    <ChatBox>
      <ActionBox
        title="Lorem Ipsum is simply dummy text"
        subtitle="With"
        description="Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
         scrambled it to make a type specimen book."
        buttonText="Chat Now"
        buttonType="primary"
      />
    </ChatBox>
  );
}
