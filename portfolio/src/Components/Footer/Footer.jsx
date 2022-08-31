import * as React from "react";
import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <Box bg="bg-accent" color="on-accent">
        <Container
          as="footer"
          role="contentinfo"
          py={{
            base: "12",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "4",
              md: "5",
            }}
          >
            <Stack justify="space-between" direction="row" align="center">
              <h1 className="contactfooter">
                {" "}
                <h1>Reach out on socials</h1>
              </h1>
              <ButtonGroup variant="ghost-on-accent">
                <IconButton
                  as="a"
                  href="https://www.linkedin.com/in/thiernosissoko/"
                  target="blank"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="3rem" />}
                />
                <IconButton
                  as="a"
                  href="https://twitter.com/"
                  target="blank"
                  aria-label="GitHub"
                  icon={<FaTwitter fontSize="3rem" />}
                />
                <IconButton
                  as="a"
                  href="https://github.com/Nothier96"
                  target="blank"
                  aria-label="Twitter"
                  icon={<FaGithub fontSize="3rem" />}
                />
              </ButtonGroup>
            </Stack>
            <Text fontSize="lg" color="on-accent-subtle">
              &copy; {new Date().getFullYear()} TecHouse LLC, Inc. All rights
              reserved.
            </Text>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
