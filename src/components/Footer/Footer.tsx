import React from 'react';
import styled from 'styled-components';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

import ClickableIcon from '@components/ClickableIcon';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import { BREAKPOINTS } from '@constants';

const WIDTH = 24;

const Footer = () => (
  <Wrapper>
    <FooterContent>
      <Copyright>
        © 2021 Sam Rose
        <br />
        All Rights Reserved.
      </Copyright>
      <Icons>
        <ClickableIcon
          size={WIDTH}
          href="https://codepen.io/samrose3"
          icon={socialCodepen}
          iconHover={socialCodepen}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.github.com/samrose3"
          icon={socialGithub}
          iconHover={socialGithub}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.twitter.com/_samrose3_"
          icon={socialTwitter}
          iconHover={socialTwitter}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.linkedin.com/in/samrose3"
          icon={socialLinkedin}
          iconHover={socialLinkedin}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
      </Icons>
    </FooterContent>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
`;

const FooterContent = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
  color: var(--colors-gray900);
  border-top: 1px solid var(--colors-gray100);

  @media ${BREAKPOINTS.sm} {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  font-size: 0.875rem;
  text-align: left;
  line-height: 1.75;
`;

const Icons = styled.div`
  position: relative;
  justify-content: space-between;
  color: var(--colors-gray400);
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;

  & > *:not(:first-of-type) {
    margin-left: 0.75rem;
  }

  @media ${BREAKPOINTS.desktop} {
    margin-top: 0;

    & > * {
      text-align: right;
    }
  }
`;

export default Footer;
