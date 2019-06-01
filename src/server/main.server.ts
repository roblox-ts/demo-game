import { makeHello } from "@shared/module";
import { CollectionService } from "services";

print(makeHello("server/main.server.ts"));

CollectionService.GetTagged("Lava").forEach(part => {
	if (part.IsA("BasePart")) {
		part.Touched.Connect(otherPart => {
			const character = otherPart.Parent;
			if (character && character.IsA("Model")) {
				character.BreakJoints();
			}
		});
	}
});
