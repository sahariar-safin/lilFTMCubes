import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { useEffect, useState } from "react";
import { getDocuments } from "../api/document";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Props = {
  handleOpenModal: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      fontSize: "25px",
      letterSpacing: "0.1px",
      cursor: "pointer",
    },
  })
);

export default function ConnectButton({ handleOpenModal }: Props) {
  const classes = useStyles();
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  const [documents, setDocuments]: any = useState([]);

  const getDocumentAndSet = async () => {
    const { data }: any = await getDocuments("buttonMain");
    console.log(data);
    setDocuments(...data);
  };

  useEffect(() => {
    getDocumentAndSet();
  }, []);

  return account ? (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "96%",
        marginTop: "50px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        background="gray.700"
        borderRadius="xl"
        justifyContent="center"
        py="0"
      >
        <Box px="3">
          <Text color="white" fontSize="md">
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}{" "}
            ETH
          </Text>
        </Box>
        <Button
          onClick={handleOpenModal}
          bg="gray.800"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
        >
          <Text color="white" fontSize="md" fontWeight="medium" mr="2">
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
          <Identicon />
        </Button>
      </Box>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "96%",
        marginTop: "50px",
      }}
    >
      <Button
        onClick={handleConnectWallet}
        bg="blue.800"
        color="blue.300"
        fontSize="lg"
        fontWeight="medium"
        borderRadius="xl"
        border="1px solid transparent"
        _hover={{
          borderColor: "blue.700",
          color: "blue.400",
        }}
        _active={{
          backgroundColor: "blue.800",
          borderColor: "blue.700",
        }}
      >
        {documents?.button2}
      </Button>
    </div>
  );
}
