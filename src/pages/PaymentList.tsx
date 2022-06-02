import { List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Payment } from "../@types/payment";

const PaymentListContainer = styled(List)(({ theme }) => {
  return `
    flex-grow: 1;
    ${theme.breakpoints.up("xl")} {
      padding-right: 188px;
    }
  `;
});

const PaymentListItem = styled(ListItem)`
  display: block;
  padding: 58px 30px 16px 0px;
  border-bottom: solid 2px #d2d3d4;
  margin-bottom: 4px;
`;

const CategoryLabel = styled(Typography)`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.75px;
  text-indent: 4px;
`;

const ContentLabel = styled(Typography)`
  font-size: 56px;
  line-height: 110px;
  text-indent: 3px;
`;

interface PaymentListProps {
  paymentListData: Payment[];
}

const PaymentList: React.FC<PaymentListProps> = ({ paymentListData = [] }) => {
  return (
    <PaymentListContainer>
      {paymentListData.map((item: Payment) => {
        return (
          <PaymentListItem key={item.id}>
            <CategoryLabel variant="body1" color="secondary">
              {item.category}
            </CategoryLabel>

            <ContentLabel variant="body2" color="secondary">
              {item.content}
            </ContentLabel>
          </PaymentListItem>
        );
      })}
    </PaymentListContainer>
  );
};

export default PaymentList;
