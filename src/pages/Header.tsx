import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled(Box)(({ theme }) => {
  return `
    border-bottom: ${theme.palette.primary.main} solid 4px;
    padding-bottom: 37px;
  `;
});

const HeaderLabel = styled(Typography)`
  font-size: 63px !important;
  text-indent: 5px;
  letter-spacing: -0.6px;
`;

const Header: React.FC = () => {
  console.log("hello");
  return (
    <HeaderContainer>
      <HeaderLabel variant="h2" color="primary">
        Repayments
      </HeaderLabel>
    </HeaderContainer>
  );
};
export default Header;
