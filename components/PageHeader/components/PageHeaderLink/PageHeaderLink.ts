import Link from 'next/link'

const PageHeaderLink = ({ link, active }) => {
   {active !== link && <StyledLink key={link.link} href={link.link}>
      <Text
        className={cx(classes.link, active === link.link && classes.linkActive)}
      >
        {link.label}
      </Text>
    </StyledLink>
    {active === link && <StyledActiveLink }
}