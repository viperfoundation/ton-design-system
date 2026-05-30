import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export function HomeComponent() {
	const navigate = useNavigate();
	return (
		<>
			<Button
				className="w-40"
				onClick={() => {
					navigate("/theme");
				}}
			>
				To /theme
			</Button>
			<Button
				className="w-40"
				onClick={() => {
					navigate("/v2");
				}}
			>
				To /v2
			</Button>
			<Button
				className="w-40"
				onClick={() => {
					navigate("/lotties");
				}}
			>
				To /lotties
			</Button>
		</>
	);
}
