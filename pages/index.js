import { TextStyle } from '@shopify/polaris';
import { Spinner } from '@shopify/polaris';

const Index = () => (
    <div>
      <TextStyle variation="positive">
      <Spinner accessibilityLabel="Spinner example" size="large" color="inkLightest" />
      Sample app using React and Next.js
    </TextStyle>
    </div>
  );
  
  export default Index;