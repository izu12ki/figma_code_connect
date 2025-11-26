"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"

export function FacilityCodeInput() {
  const [facilityCode, setFacilityCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!facilityCode.trim()) {
      setError("施設コードを入力してください")
      return
    }

    // Clear error and proceed to next screen (PG007)
    setError("")
    console.log("Navigating to PG007 with facility code:", facilityCode)
    // TODO: Implement navigation to PG007
  }

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-lg border-border/50">
        <CardHeader className="space-y-3 text-center pb-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Eye className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-balance">施設コード入力</CardTitle>
          <CardDescription className="text-base leading-relaxed text-pretty">
            利用する眼科の施設コードを入力してください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="facility-code" className="text-base font-medium">
                施設コード
              </Label>
              <Input
                id="facility-code"
                type="text"
                placeholder="施設コードを入力"
                value={facilityCode}
                onChange={(e) => {
                  setFacilityCode(e.target.value)
                  setError("")
                }}
                className={`h-12 text-base ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "facility-code-error" : undefined}
                required
              />
              {error && (
                <p id="facility-code-error" className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold" size="lg">
              登録
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
