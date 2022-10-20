import React from 'react';
import cn from 'classnames';
import styles from './TransactionHistory.module.scss';

function TransactionHistory({ items }) {
  console.log('TransactionHistory', { items });
  return (
    <>
      <table className={cn(styles.TransactionHistory)}>
        <thead className={cn(styles.thead)}>
          <tr className={cn(styles.tr)}>
            <th className={cn(styles.th)}>Type</th>
            <th className={cn(styles.th)}>Amount</th>
            <th className={cn(styles.th)}>Currency</th>
          </tr>
        </thead>
        <tbody className={cn(styles.tbody)}>
          {items.map(item => (
            <tr className={cn(styles.tr)} key={item.id}>
              <td className={cn(styles.td)}>{item.type}</td>
              <td className={cn(styles.td)}>{item.amount}</td>
              <td className={cn(styles.td)}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;

// // import './Alert.scss';
// import PropTypes from 'prop-types';
// import styles from './Alert.module.scss';
// import cn from 'classnames';

// // const alertStyles = {
// //   margin: 8,
// //   padding: "12px 16px",
// //   borderRadius: 4,
// //   color: "white",
// // };

// // const getBgColor = variant => {
// //   switch (variant) {
// //     case "info":
// //       return "blue";
// //     case "success":
// //       return "green";
// //     case "error":
// //       return "red";
// //     case "warning":
// //       return "orange";
// //     default:
// //       throw new Error(`Unsupported variant prop value - ${variant}`);
// //   }
// // };

// export const Alert = ({
//   variant,
//   children,
//   outlined = false,
//   textCenter = false,
// }) => {
//   return (
//     <p
//       className={cn(styles.alert, styles[variant], {
//         [styles.outlined]: outlined === true, //???? поввино бути тру!!

//         [styles.textCenter]: textCenter, // textCenter !== false && textCenter > 9  !!!! EXEMPLE
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// Alert.propTypes = {
//   variant: PropTypes.string.isRequired,
//   outlined: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//   textCenter: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//   children: PropTypes.node,
// };
