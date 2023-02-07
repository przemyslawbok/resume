import { FC } from 'react';
import { LoadingOverlay } from '@mantine/core';

import { LoaderProps } from './Loader.data';

const Loader: FC<LoaderProps> = (props) => {
  const { visible } = props;

  return <LoadingOverlay visible={visible} overlayBlur={2} />;
};

export default Loader;
