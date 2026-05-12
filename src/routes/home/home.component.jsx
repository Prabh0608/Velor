import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import { CategoriesContext } from '../../context/categories.context';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  HeroImage,
  HeroStats,
  StatsItem,
  NewDropsSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ViewAllLink,
  FeaturedSection,
  PromoSection,
  PromoContent,
  PromoImage,
  GallerySection,
  NewsletterSection,
  NewsletterContent,
  NewsletterForm,
  BrandMarquee
} from './home.styles.jsx';

const Home = () => {
  const navigate = useNavigate();
  const { categoriesMap } = useContext(CategoriesContext);
  const newDropsCategories = Object.keys(categoriesMap).slice(0, 3);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroSubtitle>SPRING / SUMMER 2026</HeroSubtitle>
          <HeroTitle>
            REFLECT<br />FASHION
          </HeroTitle>
          <p className="hero-description">
            Discover curated collections that blend timeless elegance with contemporary edge. 
            Crafted for those who lead with style.
          </p>
          <HeroCta onClick={() => navigate('/shop')}>
            EXPLORE COLLECTION
          </HeroCta>

          <HeroStats>
            <StatsItem>
              <span className="number">01</span>
              <span className="label">Premium Materials</span>
            </StatsItem>
            <StatsItem>
              <span className="number">02</span>
              <span className="label">Sustainable</span>
            </StatsItem>
            <StatsItem>
              <span className="number">03</span>
              <span className="label">Worldwide</span>
            </StatsItem>
            <StatsItem>
              <span className="number">04</span>
              <span className="label">Artisan Crafted</span>
            </StatsItem>
          </HeroStats>
        </HeroContent>

        <HeroImage>
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop" 
            alt="VELOR Fashion" 
          />
          <div className="image-badge">
            <span>NEW ARRIVAL</span>
            <span className="price">From $89</span>
          </div>
        </HeroImage>
      </HeroSection>

      <BrandMarquee>
        <div className="marquee-track">
          <span>VELOR</span>
          <span>•</span>
          <span>PREMIUM ESSENTIALS</span>
          <span>•</span>
          <span>TIMELESS DESIGN</span>
          <span>•</span>
          <span>VELOR</span>
          <span>•</span>
          <span>PREMIUM ESSENTIALS</span>
          <span>•</span>
          <span>TIMELESS DESIGN</span>
          <span>•</span>
        </div>
      </BrandMarquee>

      <NewDropsSection>
        <SectionHeader>
          <div>
            <SectionTitle>NEW DROPS</SectionTitle>
            <SectionSubtitle>Fresh arrivals for the season</SectionSubtitle>
          </div>
          <ViewAllLink onClick={() => navigate('/shop')}>
            VIEW ALL →
          </ViewAllLink>
        </SectionHeader>
        <Directory />
      </NewDropsSection>

      <FeaturedSection>
        <SectionHeader>
          <div>
            <SectionTitle>FEATURED DROPS</SectionTitle>
            <SectionSubtitle>Stand out, stay ahead</SectionSubtitle>
          </div>
          <ViewAllLink onClick={() => navigate('/shop')}>
            VIEW ALL →
          </ViewAllLink>
        </SectionHeader>

        <div className="featured-grid">
          {newDropsCategories.map((title, idx) => (
            <div 
              key={title} 
              className="featured-card"
              onClick={() => navigate(`/shop/${title}`)}
            >
              <div className="card-image">
                <img 
                  src={categoriesMap[title]?.items?.[0]?.imageUrl || `https://images.unsplash.com/photo-${1500 + idx}?w=600&auto=format&fit=crop`} 
                  alt={title}
                />
                <div className="card-overlay">
                  <span className="category">{title.toUpperCase()}</span>
                  <span className="cta">SHOP NOW →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FeaturedSection>

      <PromoSection>
        <PromoContent>
          <span className="promo-label">ABOUT VELOR</span>
          <h2>
            Clothing label offering premium quality, trend-conscious pieces for men and women who lead with style.
          </h2>
          <p>
            Each piece in our collection is thoughtfully designed and meticulously crafted 
            using sustainable materials. We believe fashion should feel as good as it looks.
          </p>
          <button onClick={() => navigate('/shop')}>
            SHOP NOW
          </button>

          <div className="promo-thumbnails">
            <img src="https://images.unsplash.com/photo-1434389677669-e08b4dba3a65?w=200&auto=format&fit=crop" alt="Style 1" />
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&auto=format&fit=crop" alt="Style 2" />
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&auto=format&fit=crop" alt="Style 3" />
            <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&auto=format&fit=crop" alt="Style 4" />
          </div>
        </PromoContent>
        <PromoImage>
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop" 
            alt="VELOR Collection" 
          />
        </PromoImage>
      </PromoSection>

      <GallerySection>
        <SectionHeader>
          <div>
            <SectionTitle>SHOP YOUR STYLE</SectionTitle>
            <SectionSubtitle>Curated looks for every occasion</SectionSubtitle>
          </div>
        </SectionHeader>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop" alt="Look 1" />
            <div className="gallery-overlay">
              <span>URBAN ESSENTIALS</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop" alt="Look 2" />
            <div className="gallery-overlay">
              <span>STREET STYLE</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop" alt="Look 3" />
            <div className="gallery-overlay">
              <span>MINIMALIST</span>
            </div>
          </div>
          <div className="gallery-item wide">
            <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop" alt="Look 4" />
            <div className="gallery-overlay">
              <span>EVENING WEAR</span>
            </div>
          </div>
        </div>
      </GallerySection>

      <NewsletterSection>
        <NewsletterContent>
          <h2>Join the VELOR Circle</h2>
          <p>Sign up for exclusive offers, style tips, and early access to new drops.</p>
          <NewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterSection>
    </HomeContainer>
  );
};

export default Home;
