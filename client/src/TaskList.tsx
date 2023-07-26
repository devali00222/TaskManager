import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { Task } from "./Task";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

interface TaskListProps {
  tasks: Task[];
  onTaskCompleted: (_id: string) => void;
  onTaskDelete: (_id: string) => void;
}

const ControlledAccordions: React.FC<TaskListProps> = ({
  tasks,
  onTaskCompleted,
  onTaskDelete,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  let i = 1;
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {tasks.map((task) => {
        i++;
        return (
          <Accordion
            expanded={expanded === `panal${i}`}
            key={task._id}
            onChange={handleChange(`panal${i}`)}
            sx={{ marginBottom: "1em", border: "1px #DDD solid" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {task.taskName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography maxWidth="sm">{task.description}</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <IconButton
                    edge="end"
                    aria-label="mark completed"
                    onClick={() => onTaskCompleted(task._id!)}
                    disabled={task.isCompleted}
                  >
                    <CheckIcon />
                  </IconButton>
                  <Link to={`/update/${task._id}`}>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      
                    >
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onTaskDelete(task._id!)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ControlledAccordions;
