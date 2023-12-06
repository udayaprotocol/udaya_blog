import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useColorModeValue,
  Heading,
  Flex,
  FlexProps,
  Icon,
  Image
} from "@chakra-ui/react";
import { useHover } from "usehooks-ts";
import Logo from "@habla/icons/Logo";
import LogoAnimated from "@habla/icons/LogoAnimated";
import {ColorModeSwitcher} from "./ColorModeSwitcher"



const Login = dynamic(() => import("@habla/components/nostr/Login"), {
  ssr: false,
});

export default function Header(props: FlexProps) {
  const logoColor = useColorModeValue("black", "white");
  const ref = useRef(null);
  const isHovering = useHover(ref);
  
  // const getConnectionButtons = () => {
  //   if (account) {
  //     return (
  //       <Button onClick={_disconnect} type="dashed">
  //         Disconnect
  //       </Button>
  //     );
  //   }
  //   return (
  //     <Button onClick={connect} type="primary">
  //       Connect
  //     </Button>
  //   );
  // };
  return (
    <Flex
      as="header"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <Flex alignItems="center" gap="4">
        <Link href="/" shallow ref={ref}>
          {/* <Icon
            boxSize={14}
            as={isHovering ? LogoAnimated : Logo}
            fill={logoColor}
          /> */}
          <Image boxSize={14}   src="logo.png"></Image>
        </Link>
      </Flex>
      <Flex>
      
      </Flex>
      <Flex alignItems="center" gap="1">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Login />
      </Flex>
    </Flex>
  );
}
