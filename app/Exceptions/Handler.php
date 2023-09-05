<?php

namespace App\Exceptions;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Exception
     */
    public function render($request, Throwable $exception)
    {
        if ($request->is('api/*')) {
            return response()->json([
                'status' => 500,
                'message' => $exception->getMessage()
            ], 500);
        }
        return parent::render($request, $exception);
    }
    public function register(): void
    {
        $this->renderable(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    "status" => false,
                    "status_code" => 404,
                    "message" => $e->getMessage(),
                ], 404);
            }
        });
    }
/**
     * @param Request $request
     * @param Throwable $e
     * @return JsonResponse|Response|\Symfony\Component\HttpFoundation\Response
     * @throws Throwable
     */
    // public function render($request, Throwable $e){
    //     if ($request->is('api/*')) {
    //         return response()->json([
    //             'message' => 'Record not found.'
    //         ], 404);
    //     }
    //     return parent::render($request, $e);
    // }
}
