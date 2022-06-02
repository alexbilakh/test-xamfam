import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconCalendar from "../assets/icons/icon-calendar.svg";
import IconCoin from "../assets/icons/icon-coin.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ActionListContainer = styled(List)(({ theme }) => {
  return `
    flex: none;
    width: 100%;
    background-color: #f4f7fb;
    border-radius: 10px;
    margin-top: 74px;
    ${theme.breakpoints.up("xl")} {
      width: 710px;
    }
  `;
});

const ActionListItem = styled(ListItem)`
  border-bottom: solid 2px #d2d3d4;
  padding: 0px;

  &:last-child {
    border-bottom-width: 0px;
  }
`;

const ActionListItemButton = styled(ListItemButton)`
  padding: 43px 49px 39px 42px;
  border-bottom: solid 2px #d2d3d4;
  margin: 3px 0px;

  &:last-child {
    border-bottom-width: 0px;
  }
`;

const ActionIcon = styled(({ alt, ...otherProps }: any) => (
  <img alt={alt} {...otherProps} />
))`
  width: 60px;
  margin: 0px 15px 0px 1px;
`;

const ActionLabel = styled(Typography)`
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 1.45px;
  flex-grow: 1;
`;

const ActionDetailIcon = styled(ChevronRightIcon)`
  margin-right: -5px;
`;

const actionItems = [
  {
    icon: IconCoin,
    label: "Make an extra payment",
  },
  {
    icon: IconCalendar,
    label: "Change repayment date",
  },
  {
    icon: IconCoin,
    label: "Change repayment amount",
  },
];

const ActionList: React.FC = () => {
  return (
    <ActionListContainer>
      {actionItems.map((item, index) => {
        return (
          <ActionListItem key={index}>
            <ActionListItemButton>
              <ActionIcon src={item.icon} alt="Coin" />
              <ActionLabel variant="body2" color="primary">
                {item.label}
              </ActionLabel>

              <IconButton area-label="detail">
                <ActionDetailIcon fontSize="large" color="primary" />
              </IconButton>
            </ActionListItemButton>
          </ActionListItem>
        );
      })}
    </ActionListContainer>
  );
};

export default ActionList;
