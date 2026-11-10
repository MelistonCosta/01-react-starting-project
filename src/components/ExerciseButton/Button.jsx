// export default function Button({ mode="filled", children, icon, ...props}) {
//     const Mode = mode;
//     const Icon = icon;
//  // Todo: Build this component!
 
//  // !!! Important: 
//  // Wrap the icon with a <span className="button-icon"> to achieve the target look
//  // Also wrap the children prop with a <span>
//     return(
//         <button
//             className={
//                 Mode === "filled" ? "button filled-button" 
//                 : Mode === "outline" ? "button outline-button" 
//                 : Mode === "text" ? "button text-button" 
//                 : "button"
//             }
//             {...props}
//         >{children}</button>
//     );
// }





export default function Button({ mode = "filled", children, Icon, ...props }) {
  return (
    <button
      className={
        mode === "filled"
          ? "button filled-button"
          : mode === "outline"
          ? "button outline-button"
          : mode === "text"
          ? "button text-button"
          : "button"
      }
      {...props}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}
