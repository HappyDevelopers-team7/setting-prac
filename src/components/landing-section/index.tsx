import { LandingImage } from '@/pages/landing';
import { StSectionRightImage, StSectionLeftImage, StSmallSection, StSettingItem } from './style';

const SectionRightImage = () => {
  return (
    <StSectionRightImage className='landing-wide-section-right-image'>
      <div className='point-and-description'>
        <div className='section-point'>Point 1</div>
        <div className='section-description'>
          일의 <span>우선순위</span>를<br /> 관리하세요
        </div>
      </div>
      <LandingImage src='assets\image\images\landingImage1.svg' alt='Taskify' />
    </StSectionRightImage>
  );
};

const SectionLeftImage = () => {
  return (
    <StSectionLeftImage className='landing-wide-section-left-image'>
      <LandingImage src='assets\image\images\landingImage2.svg' alt='Taskify' />
      <div className='point-and-description'>
        <div className='section-point'>Point 2</div>
        <div className='section-description'>
          해야 할 일을 <br />
          등록하세요
        </div>
      </div>
    </StSectionLeftImage>
  );
};

const SmallSection = () => {
  return (
    <StSmallSection>
      {/* <div className='landing-small-section'> */}
      <div className='small-section-title'>생산성을 높이는 다양한 설정⚡</div>
      <div className='setting-items-container'>
        <StSettingItem>
          <SettingItem
            src='assets\image\images\landingImage3.svg'
            alt='Taskify'
            title='대시보드 설정'
            description='대시보드 사진과 이름을 변경할 수 있어요.'
          />
        </StSettingItem>
        <StSettingItem>
          <SettingItem
            src='assets\image\images\landingImage4.svg'
            alt='Taskify'
            title='초대'
            description='새로운 팀원을 초대할 수 있어요.'
          />
        </StSettingItem>
        <StSettingItem>
          <SettingItem
            src='assets\image\images\landingImage5.svg'
            alt='Taskify'
            title='구성원'
            description='구성원을 초대하고 내보낼 수 있어요.'
          />
        </StSettingItem>
      </div>
    </StSmallSection>
  );
};

const SettingItem = ({ src, alt, title, description }) => {
  return (
    <div>
      <div className='image-container'>
        <img src={src} alt={alt} />
      </div>
      <div className='description-container'>
        <div className='description-title'>{title}</div>
        <div className='description-content'>{description}</div>
      </div>
    </div>
  );
};

export const Section = () => {
  return (
    <>
      <SectionRightImage />
      <SectionLeftImage />
      <SmallSection />
    </>
  );
};
