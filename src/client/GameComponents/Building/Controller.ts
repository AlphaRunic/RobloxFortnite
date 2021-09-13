import { UserInputService as UIS } from "@rbxts/services";
import { NetworkComponent } from "shared/Carbon/Internal/Component";

export default class BuildingController implements NetworkComponent {
    public readonly Network = {};
    public readonly Name = "BuildingController";
    
    public Start(): void {
        UIS.InputBegan.Connect(io => {
            const key: Enum.KeyCode = io.KeyCode;
            const { F, C, Z, X, T } = Enum.KeyCode;
            switch(key) {
                case F: {
                    print("wall");
                    // wall
                }
                case C: {
                    print("stair");
                    // stair
                }
                case Z: {
                    print("floor");
                    // floor
                }
                case X: {
                    print("cone");
                    // cone
                }
                case T: {
                    print("trap");
                    // trap
                }
            }
        })
    }
}