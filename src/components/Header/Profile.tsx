import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Rafael Azevêdo</Text>
                    <Text color="gray.300" fontSize="small">
                        rafaeldantas461@gmail.com
                    </Text>
                </Box>)}

            <Avatar
                size="md"
                name="Rafael Azevedo"
                src="https://github.com/Rafaeldsa.png" />
        </Flex>
    );
}