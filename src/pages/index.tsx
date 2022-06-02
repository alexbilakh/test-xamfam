import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Payment } from "../@types/payment";

import Header from "./Header";
import PaymentList from "./PaymentList";
import ActionList from "./ActionList";

const PageContainer = styled(Box)`
  padding: 75px 110px 75px 75px;
`;

const ContentContainer = styled(Box)(({ theme }) => {
  return `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${theme.breakpoints.up("xl")} {
      flex-direction: row;
    }
  `;
});

const Pages: React.FC = () => {
  const [paymentList, setPaymentList] = useState<Payment[]>([]);

  useEffect(() => {
    const paymentListData: Payment[] = [
      {
        id: 1,
        category: "Next direct debit",
        content: "$356.95 in 10 days (29 Jul)",
      },
      {
        id: 2,
        category: "Payment Frequency",
        content: "Weekly on Wednesdays",
      },
    ];
    setPaymentList(paymentListData);
  }, []);

  return (
    <PageContainer>
      <Header />

      <ContentContainer>
        <PaymentList paymentListData={paymentList} />
        <ActionList />
      </ContentContainer>
    </PageContainer>
  );
};
export default Pages;
