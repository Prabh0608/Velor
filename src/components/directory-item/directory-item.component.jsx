import {
  DirectoryItemContainer,
  BackgroundImage,
  Body
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category, onClick }) => {
  const { imageUrl, title, subtitle } = category;

  return (
    <DirectoryItemContainer onClick={onClick}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>{subtitle}</p>
        <span className="cta">SHOP NOW →</span>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
