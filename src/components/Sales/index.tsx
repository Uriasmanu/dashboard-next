import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos Clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com.br</span>
                    </div>
                </article>
            </CardContent>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com.br</span>
                    </div>
                </article>
            </CardContent>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com.br</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}