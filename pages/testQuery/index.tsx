import Link from 'next/link';
import { Button } from '@mantine/core';
import { Routes } from 'common/routes';
import { SocialLink } from 'db/model';
import { UserContext } from 'utils/contexts';
import { UserSocialLinkRepository } from 'utils/repositories';
import { useContext, useEffect, useState } from 'react';

const TestQueryPage = () => {
  const { user } = useContext(UserContext);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>();

  const userSocialLinksRepository = new UserSocialLinkRepository(user.uid!);

  useEffect(() => {
    const getSocialLinks = async () => {
      const result = await userSocialLinksRepository.getAll();
      setSocialLinks(result);
    };

    getSocialLinks();
  });

  const createLinkClick = () => {
    const randomize = Math.random() * 10000000;

    userSocialLinksRepository.create({
      link: `testLink${Math.floor(randomize)}`,
      name: `testName${Math.floor(randomize)}`,
    });
  };

  const editLinkClick = (id?: string) => {
    if (!id) return;

    const randomize = Math.random() * 10000000;

    userSocialLinksRepository.update({
      id,
      link: `testLink${Math.floor(randomize)}`,
      name: `testName${Math.floor(randomize)}`,
    });
  };

  const deleteLinkClick = (id?: string) => {
    if (!id) return;
    userSocialLinksRepository.delete(id);
  };

  return (
    <main>
      Social Links
      <ul>
        {socialLinks?.map((link: SocialLink) => (
          <li key={link.link}>
            <table>
              <tr>
                <td>{link.name}</td>
                <td>
                  <Button onClick={() => editLinkClick(link.id)}>
                    Edit Link
                  </Button>
                </td>
                <td>
                  <Button onClick={() => deleteLinkClick(link.id)}>
                    Delete Link
                  </Button>
                </td>
              </tr>
            </table>
          </li>
        ))}
      </ul>
      <Button onClick={createLinkClick}>Create Random Link</Button>
      <br />
      <br />
      <Link href={Routes.Admin}>Back to Admin</Link>
    </main>
  );
};

export default TestQueryPage;
