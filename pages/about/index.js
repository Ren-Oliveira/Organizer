import Link from "next/link";
import { Typography, Divider } from "@mui/material";

const TimeTable = () => {
  return (
    <div style={{ margin: "2rem 3.5rem", color: "white" }}>
      <Divider>
        <Typography variant="h5" color="#Deadad">
          <strong> About </strong>
        </Typography>
      </Divider>

      <Typography
        margin="0 15vw 0 15vw"
        sx={{ fontSize: "1rem", letterSpacing: "1px" }}
      >
        <br />
        <strong>Q: What about this page?</strong> <br />
        A: I'm building up my portfolio and this page manages to combine some
        projects frequently recommended to new developers. It doesn't have many
        fancy features, but it works well!
        <br />
        <br />
        <strong>Q: What can I do here?</strong> <br />
        A: Manage your tasks, expenses, timetable and your goals! All neatly
        packed in one page!
        <br />
        <br />
        <strong>Q: Why would I use this page?</strong> <br />
        A: It's free and it has no adds. <br />
        <br />
        <strong>Q: Should I create an account?</strong> <br />
        A: It's not necessary. If you choose to not create an account, all your
        data will be stored in your browser's local storage. If you create an
        account, you data will be stored in a secure and incrypted database.
        This way you can clear your cookies and not lose any information. Once
        the information is lost, it can't be recovered. <br /> <br />
        <strong>Q: Is there a way to use light-mode on this page?</strong>{" "}
        <br />
        A: No! Go away! <br />
        <br />
      </Typography>

      <Divider>
        <Typography variant="h6" color="#Deadad">
          <Link href="https://junio-o.web.app">Renato Oliveira</Link>
        </Typography>
      </Divider>
    </div>
  );
};

export default TimeTable;
