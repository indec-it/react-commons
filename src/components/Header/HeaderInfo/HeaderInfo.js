import React from 'react';
import PropTypes from 'prop-types';
import {Image, HStack} from '@chakra-ui/react';

const HeaderInfo = ({logos, containerStyles}) => (
    <HStack
        id="header-info"
        w="100%"
        p="10px 20px"
        bg="brand.neutral100"
        justifyContent="space-between"
        {...containerStyles}
    >
        {logos.map((logo, index) => (
            <Image
                key={index}
                src={logo.source}
                alt={logo.alt}
                data-testid="left-logo"
                height={50}
                onClick={() => (logo.onClick ? logo.onClick() : {})}
                cursor={logo.onClick ? 'pointer' : 'initial'}
            />
        ))}
    </HStack>
);

HeaderInfo.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.shape({
        source: PropTypes.string,
        onClick: PropTypes.func,
        alt: PropTypes.string
    })).isRequired,
    containerStyles: PropTypes.shape({}).isRequired
};

export default HeaderInfo;
